import "./Chart.scss";
import ChartBar from "./ChartBar/ChartBar";

function Chart({ dataPoints }) {
    const dataPointsValues = dataPoints.map((dataPoint) => dataPoint.value);
    const chartMaxValue = Math.max(...dataPointsValues);

    const content = dataPoints.map((dataPoint) => (
        <ChartBar
            key={dataPoint.label}
            label={dataPoint.label}
            value={dataPoint.value}
            maxValue={chartMaxValue}
        />
    ));

    return <div className="chart">{content}</div>;
}

export default Chart;
