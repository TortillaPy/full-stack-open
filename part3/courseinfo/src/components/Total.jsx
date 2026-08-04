const Total = ({ parts }) => <p><strong>Total of {parts.reduce((sum, part) => sum + part.exercises, 0)} exercises</strong></p>

export default Total