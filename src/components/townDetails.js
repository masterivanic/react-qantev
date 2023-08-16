import { Card, Col, Row } from 'antd';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const TownDetails = ({ town, handleDelete }) => {

    return (
        <div className="town" style={{ margin: "5px" }}>
            <Row gutter={16}>
                <Col span={64}>
                    <Card title={town.name} bordered={false}>
                        <h2>{town.address}</h2>
                        <p>Phone: {town.phone_number}</p>
                        <p>Total Cost: {town.total_cost}</p>
                        <p>Average Patient Age: {town.average_patient_age}</p>
                        <p>Average Inpatient Claim Cost: {town.average_inpatient_claim_cost}</p>
                        <p>Average Outpatient Claim Cost: {town.average_outpatient_claim_cost}</p>
                        <p>Coordinates: {town.coordinates.join(', ')}</p>
                        <Link style={{ marginRight: "10px"}} to={`/town/${town.id}`}>View maps</Link>
                        <Button onClick={() => handleDelete(town.id)} type="primary" danger>
                            delete town
                        </Button>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default TownDetails;