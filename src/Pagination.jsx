import styles from "./Pagination.module.css";
// import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

export default function Pagination({updatePage, currentPages, totalPages}){
    const handlePrev = () => {
        if(currentPages > 1){
            updatePage(prev => prev - 1)
        }
    }

    const handleNext = () => {
        if(totalPages !== currentPages){
            updatePage(prev => prev + 1)
        }
    }

    return (
        <div className={styles.paginationWrapper}>
            <button onClick={handlePrev} disabled={currentPages === 1}>
                {/* <IoIosArrowRoundBack /> */}
                Previous
            </button>

            <p>{currentPages}</p>

            <button onClick={handleNext} disabled={totalPages === currentPages}>
                {/* <IoIosArrowRound/>Forward /> */}
                Next
            </button>
        </div>
    )
}
