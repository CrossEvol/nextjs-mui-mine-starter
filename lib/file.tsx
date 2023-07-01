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
