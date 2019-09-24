import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, CustomInput } from 'reactstrap';

class SearchFilters extends Component {
    render() {
        return (
            <div className="SearchFilters">
                <div className="container">
                    <Form>
                        <FormGroup>
                            <Label className="font-weight-bold mt-3">Smart Filters</Label>
                            <hr width="80%" />
                            <div>
                                <CustomInput type="checkbox" id="CustomSwitch" label={<i className="fa fa-3x fa-certificate" style={{ color: "gray", marginBottom: "8px", }}></i>} />
                                <CustomInput type="checkbox" id="CustomSwitch2" label={<i className="fa fa-3x fa-calendar" style={{ color: "gray", marginBottom: "8px", }}></i>} />
                                <CustomInput type="checkbox" id="CustomSwitch3" label={<i className="fa fa-3x fa-heart" style={{ color: "gray", marginBottom: "8px", }}></i>} />
                            </div>
                            <hr width="80%" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="statusInput" className="font-weight-light">Status</Label>
                            <Input type="text" name="status" id="statusInput" className="text-center" placeholder="Search" />
                        </FormGroup>
                        <Button className="btn-secondary font-weight-light mb-3" style={{ width: "100%" }}>DELIVERED</Button>
                    </Form>
                </div>
            </div>
        );
    }
}

export default SearchFilters;
