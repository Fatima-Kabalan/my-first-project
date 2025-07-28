type Props = { 
    label: string;
    inputType:string;
    placeholder: string;
    value: string | number;
    onChange?: (e: React.FocusEvent<HTMLInputElement>) => void;
}


export default function Input({label, inputType, placeholder, value, onChange} : Props ){
    return ( 
        <div className="flex flex-col gap-1">
            <label>{label}</label>
            <input type={inputType} placeholder={placeholder} className="border border-gray-200 bg-yellow-200 focus:outline-none p-1 rounded-lg" value={value} onChange={onChange}/>
        </div>
    )
}