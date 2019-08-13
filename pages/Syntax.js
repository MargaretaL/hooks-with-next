import React, { useEffect, useState } from 'react'


const Syntax = () => {

    const [checkBoxValue, setCheckBoxValue] = useState(false)

    useEffect(()=> {
        console.log('in useeffect');
        return () => {
            console.log('in useEffect Cleanup')
        }
    }, [checkBoxValue]) // an array that contains a list of dependencies for the component. If the array is empty the useEffect is only called once when the comp is mounted, if you want to call it again b4 the comp is unmpinted, you need to have all the values in this array that change, (the values that the rendered output are dependent on, like a checkbox fields true or false, if that changes, it causes a rerender of the component and useEffect is called again)

    return <div>

    </div>
}