import { FC, useState } from "react";

export interface IProps {};

export const Box: FC<IProps> = (props) => {
   const [ error, setError ] = useState(null);
   const [ loading, setLoading ] = useState(false);
    return (
        <div>
            
        </div>
    );
}
