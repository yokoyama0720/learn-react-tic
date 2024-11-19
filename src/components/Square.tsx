export default function Square() {
    // boradを作成する関数
    const board = (row: number, col: number) => {
        // Array.fromで長さcolの配列を作成し、mapでrowの数だけbuttonを作成
        return Array.from({ length: col }, (_, colIndex) =>
            <div key={colIndex}>
                {Array.from({ length: row }, (_, rowIndex) => (
                    <button key={rowIndex}>X</button>
                ))}
            </div>
        )
    }
    
    return (
        <div>
            {board(3, 3)}
        </div>
    )
}