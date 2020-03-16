const beans = []

Component({
    data: { beans },
    properties: {
        position: {
            type: Object,
            observer ({ clientX, clientY }) {
                clientX -= 5
                clientY -= 5
                beans.push({
                    top: clientY + 'px',
                    left: clientX + 'px'
                })
                this.setData({ beans })
                clearTimeout(this.timeout)
                this.timeout = setTimeout(() => {
                    beans.length = 0
                    this.setData({ beans })
                }, 1000)
            }
        },
        theme: {
            type: String,
            value: "default"
        }
    }
})