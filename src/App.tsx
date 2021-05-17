import React from 'react';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject,
AccumulationDataLabel, AccumulationLegend, AccumulationTooltip, PieSeries } from '@syncfusion/ej2-react-charts';
import { sampleData } from './data';
import './App.css';
function App() {
  return (
    <div>
      <AccumulationChartComponent title="Mobile Browser Statistics" 
      legendSettings={{position:"Bottom"}}
      tooltip={{enable: true}}>
        <Inject services={[AccumulationDataLabel, AccumulationLegend, AccumulationTooltip, PieSeries]}></Inject>
        <AccumulationSeriesCollectionDirective>
          {/* Add type="Pie" and innerRadius="50%" to create doughnut chart in below code*/}
          {/* To create the Funnel chart, import and inject FunnelSeries into the chart services and then set the type="Funnel" in series*/}
          {/* To create the Pyramid chart, import and inject PyramidSeries into the chart services and then set the type="Pyramid" in series */}
          <AccumulationSeriesDirective type="Pie" dataSource={sampleData} 
          xName="name" yName="value" dataLabel={{visible: true, name:"text", position:"Inside"}}></AccumulationSeriesDirective>
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
    </div>
  );
}

export default App;
