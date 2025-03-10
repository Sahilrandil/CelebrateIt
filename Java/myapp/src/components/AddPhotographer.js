import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../assessts/formStyle.css';


export function AddPhotographer(){
    return(
        <>

        <div className='formdiv'>
        <div>
        <Form >
        {/*Photographer Studio Name*/}
    <Form.Group>
    <Form.Label>Name</Form.Label>
     <Form.Control type="text" placeholder="Enter here" />
     </Form.Group>


     <Form.Group>
    <Form.Label>Charge Per Day (in INR) </Form.Label>
     <Form.Control type="number" placeholder="Amount (in INR)" 
     min={1000}
     />
     </Form.Group>

     {/* Photographer experience*/}
     <Form.Group>
    <Form.Label>Years Of Experience</Form.Label>
     <Form.Control type="text" placeholder="Enter here" />
     </Form.Group>

     {/* Photographer Location*/}
     <Form.Group>
    <Form.Label>Based On Location</Form.Label>
     <Form.Control type="text" placeholder="Enter here" min={2}/>
     </Form.Group>

      <Button variant="primary" type="submit">
        Add
      </Button>
    </Form>
    </div>

    </div>
        </>
    );
}