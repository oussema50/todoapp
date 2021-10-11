import { Container,Tabs,TabList,Tab } from '@chakra-ui/react';
import visibility_fitler from '../constants';
import { filter } from '../redux/action';
import { useDispatch } from 'react-redux';
const FilterTodo = () => {
    const dispatch = useDispatch();
    return (
        <Container centerContent>
            <Tabs>
                <TabList>
                    {Object.keys(visibility_fitler).map(item=>
                    <Tab
                    onClick={()=>{dispatch(filter(visibility_fitler[item]))}}
                    key={`visibility_fitler_${visibility_fitler[item]}`}
                    >
                        {visibility_fitler[item]}
                    </Tab>)}
                </TabList>
            </Tabs>
        </Container>
    )
}

export default FilterTodo
