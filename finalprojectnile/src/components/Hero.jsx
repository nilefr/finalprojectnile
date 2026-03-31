export default function Hero({ title, subtitle, backgroundImage }) {
    return (
        <div
            className="relative w-full h-96 bg-cover bg-center flex items-center justify-center"
            style={{
                backgroundImage: backgroundImage ? `url(${backgroundImage})` : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
            }}
        >
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="relative z-10 text-center text-white px-4">
                <h1 className="text-5xl font-bold mb-4">{title}</h1>
                {subtitle && <p className="text-xl opacity-90">{subtitle}</p>}
            </div>
        </div>
    );
}