import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import structure from './meta.json';

console.log(structure);

const Leaf = ({ item }) => {
    return (
        <label className="leaf-label">
            item.title
            <input className="leaf-input" type="text" />
        </label>
    );
};

const Tree = ({ children }) => {

    if (!children || !Array.isArray(children)) return null;
    const isRow = children.find(item => item.type = "panel");


    return isRow ? (
        <Row>
            {children.map((item) => {
                const width = +item.width;
                const type = item.type;
                return (
                    <Col key={item.id} xs={width} >
                        {
                            type === 'item' ?
                                <Leaf item={item} />
                                : <Tree children={item.children} />
                        }
                    </Col>
                )
            })}
        </Row>
    ) :
        (
            <>
                {children.map((item) => {
                    const width = +item.width;
                    return (
                        <Col key={item.id} xs={width} >
                            <Leaf item={item} />
                        </Col>
                    )
                })}
            </>
        )
}
export const Panel = () => {

    return (
        <Grid fluid> 
                <Tree children={structure.children} /> 
        </Grid>
    )
}