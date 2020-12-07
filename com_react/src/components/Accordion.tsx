import React, {
    Component,
    createContext,
    useCallback,
    useContext,
    useMemo,
    useState,
} from 'react'
import {
    iAccordionContext,
    iAccordionItem,
    iAccordionProps,
    iAccordionState,
} from 'types'
import {v4 as uuid} from 'uuid'

const AccordionContext = createContext<iAccordionContext>(
    {} as iAccordionContext,
)

function AccordionItem({children, title}: iAccordionItem) {
    const [myId] = useState(uuid())

    const {selectedItem, selectItem} = useContext<iAccordionContext>(
        AccordionContext,
    )

    const opened = useMemo(() => {
        return selectedItem === myId
    }, [selectedItem, myId])

    const SelectItemHandle = useCallback(() => {
        if (selectedItem === myId) selectItem(null)
        else selectItem(myId)
    }, [selectedItem, myId, opened])

    return (
        <aside className={opened ? 'active' : ''}>
            <header onClick={SelectItemHandle}>
                <span>{title}</span>
                {opened ? (
                    <i className="fas fa-arrow-up"></i>
                ) : (
                    <i className="fas fa-arrow-down"></i>
                )}
            </header>
            <main>{children}</main>
        </aside>
    )
}

export default class Accordion extends Component<
    iAccordionProps,
    iAccordionState
> {
    public static Item = AccordionItem

    public state = {
        selectedItem: null,
    }

    render() {
        const {selectedItem} = this.state
        const selectItem = (selectedItem: string | null) => {
            this.setState({selectedItem})
        }

        return (
            <AccordionContext.Provider value={{selectedItem, selectItem}}>
                <div className="accordion">{this.props.children}</div>
            </AccordionContext.Provider>
        )
    }
}
