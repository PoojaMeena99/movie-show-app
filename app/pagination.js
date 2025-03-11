function Pagination({ handlePrevious, handleNext, currentPage, totalPages }) {
    return (
        <div className="pagination">
            <div className="pagination">
                <button className="prev" onClick={handlePrevious} disabled={currentPage === 1}>
                    <span>&lt;</span> Previous
                </button>
                <span className="current-page">{currentPage}</span>
                <span className="total-pages">of {totalPages}</span>
                <button className="next" onClick={handleNext} disabled={currentPage === totalPages}>
                    Next <span>&gt;</span>
                </button>
            </div>
        </div>
    );
}
export default Pagination;