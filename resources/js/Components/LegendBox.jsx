export default function LegendBox({ children, title }) {
    return (
        <fieldset className=" max-w-sm border border-indigo-800 rounded-lg p-2 my-2">
            <legend className="px-2 text-xl font-semibold  decoration-2 text-indigo-500">
                {title}
            </legend>
            {children}
        </fieldset>
    );
}
