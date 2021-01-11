import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Home extends React.Component{
    render(){
        return(
            <div class="jumbotron">
            <h1 class="display-4">Selamat Datang</h1>
            <p>Silahkan Login</p>
          
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email : </Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password : </Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">
                    Submit
                    </Button>
                </Form>
            
            </div>
        );
    }
}

export default Home;