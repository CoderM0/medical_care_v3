export default function BackBtn() {
    return (
        <button
            onClick={() => window.history.back()}
            className="flex gap-1 px-3 items-center"
        >
            رجوع
        </button>
    );
}
