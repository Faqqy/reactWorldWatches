export interface IWatchType {
    id: string;
    name: string;
    timezone: number;
  };

export interface IFormProps {
    addWatch: (name: string, timezone: number) => void;
};

export interface IWatchProps {
    data: IWatchType;
    onClose: (id: string) => void;
}