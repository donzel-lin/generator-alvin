// generator核心入口


const Generator = require('yeoman-generator')

module.exports = class extends Generator {
    prompting() {
        return this.prompt([
            {
                // 问题对象
                type: 'input', // 输入类型
                name: 'name', // 键名
                message: 'your app name', // 提示信息
                default: this.appname, // appname为项目生成目录的文件名称，为问题的默认值
            }
        ])
            .then(answer => {
                this.answer = answer
            })
    }
    writing() {
        // yeoman在生成文件阶段自动调用此方法
        // 尝试在目录中写入文件
        // 两个参数，一个路径，一个内容
        // this.fs.write(
        //     this.destinationPath('test.txt'),
        //     Math.random().toString()
        // )


        // 通过模板方式生成文件
        // 模板路径
        const path = this.templatePath('bar.html')
        // 输出路径
        const output = this.destinationPath('bar.html')
        // 传入内容
        const context = this.answer
        this.fs.copyTpl(path,output,context)
    }
}
