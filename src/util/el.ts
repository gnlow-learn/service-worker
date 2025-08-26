export type Attr = Record<string, string | ((e: Event) => void)>

export const el = (
    name: string,
    attr: Attr = {},
    ...children: (string | HTMLElement)[]
) => {
    const elem = document.createElement(name)

    Object.entries(attr as Record<string, string>).forEach(([k, v]) => {
        if (k.startsWith("$")) {
            if (typeof v != "function") {
                throw new Error("not a function")
            }
            elem.addEventListener(k.slice(1), v)
        } else {
            elem.setAttribute(k, v)
        }
        
    })
    elem.append(...(children || []))

    return elem
}

type Tail<T extends unknown[]> =
    T extends [infer _, ...infer Tail]
        ? Tail 
        : never

export const $ = new Proxy(
    {} as Record<
        string,
        (...args: Tail<Parameters<typeof el>>) => HTMLElement
    >,
    {
        get(_target, prop, _receiver) {
            if (typeof prop == "string") {
                return (...args: Tail<Parameters<typeof el>>) =>
                    el(prop, ...args)
            }
            return true
        }
    }
)
