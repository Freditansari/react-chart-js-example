import React, { useState } from 'react'
import { Bar, Line, Pie } from 'react-chartjs-2';

const Chart =(props) => {

    return (
        <div>


            <Bar
                data={props.data}
        
                options={{ 
                    title:{
                        display:props.displayTitle,
                        text:'Largest Cities in Massachusetts',
                        fontSize:40
                    },
                    legend:{
                        display:props.displayLegend,
                        position: props.legendPosition
                    },
                    maintainAspectRatio: true 
                }}
            />
            <Pie
                data={props.data}
        
                options={{ 
                    title:{
                        display:props.displayTitle,
                        text:'Largest Cities in Massachusetts',
                        fontSize:40
                    },
                    legend:{
                        display:props.displayLegend,
                        position: props.legendPosition
                    },
                    maintainAspectRatio: true 
                }}
            />
            <Line
                data={props.data}
        
                options={{ 
                    title:{
                        display:props.displayTitle,
                        text:'Largest Cities in Massachusetts',
                        fontSize:40
                    },
                    legend:{
                        display:props.displayLegend,
                        position: props.legendPosition
                    },
                    maintainAspectRatio: true 
                }}
            />
        </div>
    )
}

Chart.defaultProps={
    displayTitle : true,
    displayLegend: true,
    legendPosition: "right"
}
Chart.propTypes = {

}

export default Chart



