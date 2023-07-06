import fs from 'fs'
import path from 'path'

export type DirItem = {
    id: string
    title: string
    path: string
}

// const dirPath = './app/' // 当前目录路径

export const readDir = async (dirPath: string, regExp: RegExp) => {
    const readDirPromise = () => {
        return new Promise<string[]>((resolve, reject) => {
            fs.readdir(dirPath, (err, files) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(files)
                }
            })
        })
    }

    const dirArr: string[] = []
    const files = await readDirPromise()
    files.forEach((file) => {
        const filePath = path.join(dirPath, file)

        // 判断是否为目录
        if (fs.statSync(filePath).isDirectory()) {
            dirArr.push(filePath)
        }
    })
    const dirItems: DirItem[] = dirArr.map((item) => {
        return {
            id: item.replace(regExp, ''),
            title: item.replace(regExp, ''),
            path: item.replace(/app\\/, ''),
        }
    })
    return dirItems.reverse()
}

export type DirItemWithChildren = {
    id: string
    title: string
    level: number
    children?: DirItemWithChildren[]
    isLeaf: boolean
}

const rootPath = './app/' // 当前目录路径

export const hasSubDir = async (filePath: string) => {
    return new Promise<boolean>((resolve, reject) => {
        fs.readdir(filePath, (err, files) => {
            if (err) {
                console.log(err)
                reject(err)
            } else {
                // 如果files只包含当前目录的文件,而没有子目录
                if (
                    files.every((file) =>
                        fs.statSync(path.resolve(filePath, file)).isFile()
                    )
                ) {
                    console.log('当前目录下没有子目录')
                    resolve(false)
                } else {
                    console.log('存在子目录')
                    resolve(true)
                }
            }
        })
    })
}

const readDirPromise = (dirPath: string) => {
    return new Promise<string[]>((resolve, reject) => {
        fs.readdir(dirPath, (err, files) => {
            if (err) {
                reject(err)
            } else {
                resolve(files)
            }
        })
    })
}

const readDirectoriesRecursively = async (
    dirPath: string,
    level: number = 1
): Promise<DirItemWithChildren[]> => {
    const dirItems: DirItemWithChildren[] = []
    const files = await readDirPromise(dirPath)

    for (const file of files) {
        const filePath = path.join(dirPath, file)
        const stat = await fs.promises.stat(filePath)
        if (stat.isDirectory()) {
            const id = filePath.replace(/app\\/, '')
            const title = file
            const children: DirItemWithChildren[] = []
            const isLeaf =
                fs.existsSync(path.join(filePath, 'page.tsx')) &&
                !(await hasSubDir(filePath))
            const dirItem: DirItemWithChildren = {
                id,
                title,
                level,
                children,
                isLeaf,
            }
            dirItems.push(dirItem)

            const subDirItems = await readDirectoriesRecursively(
                filePath,
                level + 1
            )
            dirItem.children = subDirItems.reverse()
        }
    }

    return dirItems
}

export const readDirRecursively = async () => {
    const dirItems = await readDirectoriesRecursively(rootPath)
    return dirItems
}
