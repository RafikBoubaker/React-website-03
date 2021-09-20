import React from 'react'
import Navbar from '../../components/navbar'

import {PageContainer} from '../../components/pageContainer'
import TopSection from './topSection'

function HomePage(props) {
    return (
        <div>
            <PageContainer>
                <TopSection>
                    <Navbar/>
                </TopSection>
            </PageContainer>
            
        </div>
    )
}


export default HomePage