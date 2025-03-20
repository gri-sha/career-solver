export const navBarStyles = {
    container: "w-full flex justify-center items-center py-4 bg-zinc-900 box-border lg:gap-8 ",
    menu: "flex justify-center items-center gap-4 lg:gap-8",
    list: "flex justify-center items-center",
    item: "text-zinc-300 cursor-pointer py-2 px-4 transition-all duration-300 ease-in-out text-base lg:text-lg",
    itemDefault: "border-b-2 border-transparent hover:border-zinc-500",
    itemSelected: "border-b-2 border-zinc-500 text-zinc-50 font-semibold",
};

export const aboutInfoCardStyles = {
    card: "bg-white p-6 rounded-xl shadow-md border border-zinc-100",
    container: "grid grid-cols-1 gap-10 items-end justify-center",
    label: "text-zinc-700 font-medium text-sm lg:text-base transition-all duration-300 ease-in-out",
    input: "bg-white text-zinc-700 border border-zinc-100 rounded-md py-2 px-4 w-[150px]",
    placeholder: "text-zinc-500",
    formMessage: "text-red-500 text-xs lg:text-sm transition-all duration-300 ease-in-out",
    selectTrigger: "w-[150px] border border-zinc-100",
};

export const notesStatsCardStyles = {
    card: "bg-white p-6 rounded-xl shadow-md border border-zinc-100",
    container: "grid grid-cols-2 gap-10 items-end justify-center",
    label: "text-zinc-700 font-medium text-sm lg:text-base transition-all duration-300 ease-in-out",
    input: "bg-white text-zinc-700 border border-zinc-100 rounded-md py-2 px-4 w-[90px] sm:w-[150px] transition-all duration-300 ease-in-out",
    formMessage: "text-red-500 text-xs lg:text-sm",
};

export const selfEvalCardStyles = {
    card: "bg-white p-6 rounded-xl shadow-md border border-zinc-100",
    item: "mb-3",
    label: "text-zinc-700 font-medium text-sm lg:text-base transition-all duration-300 ease-in-out",
    slider: "w-[200px] transition-all duration-300 ease-in-out",
    sliderLabel: "flex flex-col items-center justify-center text-zinc-700 font-medium text-sm w-[200px]",
    formMessage: "text-red-500 text-xs lg:text-sm",
};

export const predictionCardStyles = {
    card: "bg-white p-6 rounded-xl shadow-sm border border-zinc-100 flex sm:w-[70%]",
    table: "w-full border-collapse text-left",
    row: "border-b last:border-none",
    label: "text-sm text-zinc-500 py-2",
    value: "text-xl font-bold py-2 text-right",
};

// form for student data input
export const dataFormStyles = {
    container: "p-6 flex flex-col justify-center items-center space-y-6 mx-auto",
    card: "bg-white p-3 rounded-xl shadow-sm border border-zinc-100 flex justify-center items-center",
    innerContainer: "flex flex-col space-y-4 lg:flex-row w-full lg:space-x-4 lg:space-y-0 transition-all duration-300 ease-in-out",
    form: "flex flex-col items-center space-y-4 w-full",
    button: "px-12 py-6 text-xl font-bold",
};

export const descInputCardStyles = {
    card: "bg-white p-6 rounded-xl shadow-md border border-zinc-100 w-[90%]",
    textarea: "h-[200px] w-full pt-2 pl-2 text-left border border-zinc-100 shadow-sm focus:outline-none",
    formMessage: "text-red-500 text-xs lg:text-sm",
};

export const cvInputCardStyles = {
    card: "bg-white p-6 rounded-xl shadow-md border border-zinc-100 w-[200px] sm:w-[50%]",
    input: "w-[80px] sm:w-[60%] transition-all duration-100 ease-in-out",
    formMessage: "text-red-500 text-xs lg:text-sm",
};

export const reviewCardStyles = {
    card: "bg-white p-6 rounded-xl shadow-sm border border-zinc-100 flex flex-col w-[80%]",
    header: "text-lg font-semibold text-zinc-800 mb-2",
    content: "text-base text-black",
};

// form for CV and job description input
export const jobFormStyles = {
    container: "p-6 flex flex-col justify-center items-center space-y-6",
    card: "bg-white p-3 rounded-xl shadow-sm border border-zinc-100 flex justify-center items-center w-full",
    form: "flex flex-col items-center space-y-4 w-full",
    button: "px-12 py-6 text-xl font-bold",
};
