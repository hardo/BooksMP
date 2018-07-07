const baseUrl = 'https://douban.uieee.com/v2';
const userBooksUrl = '/book/user/bigstud/collections'
const bookUrl = '/book'
module.exports = {
  // 通过起始值和数量获取该用户的图书
  getBooks(start = 0, count = 10) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: `${baseUrl + userBooksUrl}?start=${start}&${count}`,
        header: {
          "Content-Type": "json"
        },
        success: res => {
          resolve(res.data.collections);
        },
        fail: res => {
          reject(res);
        }
      })
    })
  },

  // 通过图书ID获取图书详情
  getBook(id) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: `${baseUrl + bookUrl}/${id}`,
        header: {
          "Content-Type": "json"
        },
        success: res => {
          resolve(res.data);
        },
        fail: res => {
          reject(res);
        }
      })
    })
  }
}