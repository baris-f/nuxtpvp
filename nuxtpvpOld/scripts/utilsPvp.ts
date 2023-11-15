export const numberWithCommas = (x : Number) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const sleep = (delay: number) => new Promise((resolve) => setTimeout(resolve, delay))