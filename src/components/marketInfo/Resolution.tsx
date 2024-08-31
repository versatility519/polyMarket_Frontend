import Button from '../Button/Button';

const Resolution = () => {
    return (
        <div className="flex flex-col ">
            <Button text="Propose resolution"
                className="flex w-40 gap-2 border text-textColor border-gray-500 px-2 py-1 text-center rounded-full "
            />
        </div >
    );
};

export default Resolution;