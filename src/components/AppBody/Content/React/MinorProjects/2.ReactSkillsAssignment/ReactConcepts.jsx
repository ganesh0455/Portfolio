import Card from "./Card";

function ReactConcepts(props) {
    const { concept, conceptDescription } = props;
    return (
        <Card className="bg-blue-800 text-white p-3 mt-4 mr-3">
            <h1 className="text-3xl p-2">{concept}</h1>
            <p className="text-xs p-2">{conceptDescription}</p>
        </Card>
    )
}
export default ReactConcepts;