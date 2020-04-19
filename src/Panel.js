import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import structure from './meta.json';

console.log(structure);

const Leaf = ({ item }) => { 
    return (
        <label className="leaf-label"  >
            {item.title}
            <input className="leaf-input" type="text" />
        </label>
    );
}; 

const Tree = ({ children }) => {

    if (!children || !Array.isArray(children)) return null;

    return (
        <>
            {children.map((item) => {  
                const width = +item.width;
                const type = item.type;
                return ( 
                            type === 'row' ? (
                                <Row key={item.id} xs={width} sm={width} md={width} lg={width}>
                                    <Tree children={item.children} />
                                </Row>
                            ) :
                                type === 'col'
                                    ? (
                                        <Col key={item.id} xs={width} sm={width} md={width} lg={width}>
                                            <Tree children={item.children} />
                                        </Col>
                                    )
                                    : <Leaf key={item.id} item={item} />
                        
                )
            })}
        </>
    )
};


export const Panel = () => {

    return (
        <Grid fluid>
            <Row>
                <Tree children={structure.children} />
            </Row>
        </Grid>
    )
}