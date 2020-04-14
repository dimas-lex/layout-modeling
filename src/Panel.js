import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';

const ResponsiveGridLayout = WidthProvider(Responsive);

export class Panel extends React.Component {
    render() {
        const layouts = [
            { i: 'a', x: 0, y: 0, w: 1, h: 2, static: true },
            { i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
            { i: 'c', x: 4, y: 0, w: 1, h: 2 }
        ];
        return (
            <ResponsiveGridLayout className="layout" layouts={layouts}
                breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
                cols={{ lg: 12, md: 12, sm: 12, xs: 12, xxs: 12 }}>
                <div key="1" className="box">1</div>
                <div key="2" className="box">2</div>
                <div key="3" className="box">3</div>
            </ResponsiveGridLayout>
        )
    }
}