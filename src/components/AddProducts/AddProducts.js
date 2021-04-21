import axios from 'axios';
import React, { useState,  } from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const AddProducts = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [pictureURL, setPictureURL] = useState(null);
    const [disabled, setDisabled] = useState(true);

    const onSubmit = data => {
        console.log(data);
        const itemData = {
            name: data.name,
            color: data.color,
            price: data.price,
            picture: pictureURL
        }
        console.log(itemData);
        const url = `https://limitless-hamlet-59432.herokuapp.com/addProduct`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(itemData)
        })
            .then(res => console.log(res));
    };

    const handlePictureUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', 'a0eb892bcd0f5135368a14dc43c123b7')
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setPictureURL(response.data.data.display_url);
                if (response.data.data.display_url) {
                    setDisabled(false)
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div style={{ backgroundColor: 'cyan', height: '100%' }}>
            <div style={{ marginLeft: '20%' }}>
                <h3 style={{ padding: '10px' }}>Add Product</h3>
                <div style={{ width: '70%', height: '20%', backgroundColor: 'white', padding: '20px', borderRadius: '10px' }}>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Product Name</Form.Label>
                                <Form.Control name="name" type="text" placeholder="Enter Name" ref={register({ required: true })} />
                                {errors.name && <p>This field is required</p>}
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Add Color</Form.Label>
                                <Form.Control name="color" type="text" placeholder="Enter Color" ref={register({ required: true })} />
                                {errors.color && <p>This field is required</p>}
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Add Price</Form.Label>
                                <Form.Control name="price" type="number" placeholder="Enter Price" ref={register({ required: true })} />
                                {errors.price && <p>This field is required</p>}
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.File id="exampleFormControlFile1" label="Add Photo" onChange={handlePictureUpload} />
                            </Form.Group>
                        </Form.Row>
                        <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
                            <Button variant="primary" type="submit" disabled={disabled}>Save</Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default AddProducts;