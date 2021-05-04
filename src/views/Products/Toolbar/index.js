import React, { useEffect, useState, useRef, useCallback } from 'react'
import Options from '../../../components/Options'
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import FilterListIcon from '@material-ui/icons/FilterList';
import Filter from './Filter'
import New from './New'

const FilterOptions = (props) => {

    const [modal, setModal] = useState(null)

    const buttons = [
        { icon: <FilterListIcon />, onClick: (() => {setModal('filter')})},
        { icon: <AddIcon />, onClick: (() => {setModal('new')})}
    ]

    return (
        <>
            <Options buttons={buttons} />
            <Filter isOpen={modal == 'filter'} handleClose={() => setModal(null)} />
            <New isOpen={modal == 'new'} handleClose={() => setModal(null)} />
        </>
    )

}

export default FilterOptions