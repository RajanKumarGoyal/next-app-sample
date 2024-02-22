import { Typography } from 'antd';
import React, { useRef, useState } from 'react';

import ClientLayout from "../../layouts/client/index";

export default function Drag() {

    const { Title } = Typography;

    const dragItem = useRef();
    const dragOverItem = useRef();

    const [list, setList] = useState(['React', 'Native', 'Javascript', 'Python', 'PHP', 'Ruby on Rails']);

    const dragStart = (e, position) => {
        dragItem.current = position;
    };

    const dragEnter = (e, position) => {
        dragOverItem.current = position;
        // console.log(e.target.innerHTML);
    };

    const drop = (e) => {

        const copyListItems = [...list];
        const dragItemContent = copyListItems[dragItem.current];

        copyListItems.splice(dragItem.current, 1);
        copyListItems.splice(dragOverItem.current, 0, dragItemContent);
        dragItem.current = null;
        dragOverItem.current = null;

        setList(copyListItems);
    };

    return (
        <div className="site-layout-background">
            <Title>Dragable Div Example</Title>
            <div className='login-form' style={{ margin: '16px 0' }}>
                {list.map((item, index) => (
                    <div style={{ backgroundColor: 'rgba(93, 188, 194, 1.00)', margin: '20px 25%', textAlign: 'center', fontSize: '40px', color: '#fff' }}
                        onDragStart={(e) => dragStart(e, index)} onDragEnter={(e) => dragEnter(e, index)} onDragEnd={drop} key={index} draggable>
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
};

/**
 * To change the layout of the page 
 * call the below function
 */
Drag.getLayout = function getLayout(page) {
    return (
        <ClientLayout>
            {page}
        </ClientLayout>
    )
};