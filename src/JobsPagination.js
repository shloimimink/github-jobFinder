import React from 'react';
import {Pagination} from "react-bootstrap";

const JobsPagination = ({page, setPage, hasNextPage}) => {
    const adjustPge = (amount) => {
        setPage(prevPage => prevPage + amount)
    }

    return (
        <Pagination>
            {page !== 1 && <Pagination.Prev onClick={() => adjustPge(-1)}/>}
            {page !== 1 && <Pagination.Item onClick={() => setPage(1)}>1</Pagination.Item>}
            {page > 2 && <Pagination.Ellipsis/>}
            {page > 2 && <Pagination.Item onClick={() => adjustPge(-1)}>{page - 1}</Pagination.Item>}
            <Pagination.Item active>{page}</Pagination.Item>
            {hasNextPage && <Pagination.Item onClick={() => adjustPge(1)}>{page + 1}</Pagination.Item>}
            {hasNextPage && <Pagination.Next onClick={() => adjustPge(1)}/>}
        </Pagination>
    );
};

export default JobsPagination;