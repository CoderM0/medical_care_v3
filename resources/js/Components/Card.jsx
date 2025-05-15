export default function Card({ src, title, num }) {
    return (
        <div class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 w-1/4 mx-auto mt-5">
            <img
                src={`/images/${src}`}
                alt="img"
                class="absolute inset-0 h-full w-full object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
            <h3 class="z-10 mt-3 text-3xl font-bold text-white">{num}</h3>
            <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                {title}
            </div>
        </div>
    );
}
