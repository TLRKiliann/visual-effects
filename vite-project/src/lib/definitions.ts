export type DetailsProps = {
    id: number;
    name: string;
    bool: boolean;
};

export type DataProps = {
    datas: DetailsProps[];
    id: number;
    name: string;
    bool: boolean;
};

export type NewDataProps = {
    newDatas: DetailsProps[];
}

export type SetNewDataProps = {
    setNewDatas: React.Dispatch<React.SetStateAction<DetailsProps[]>>;
}

export type SetInputProps = {
    setInputVal: React.Dispatch<React.SetStateAction<string>>;
}

export type SetRegisterProps = {
    setRegister: React.Dispatch<React.SetStateAction<DetailsProps[]>>;
}