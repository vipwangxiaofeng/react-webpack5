var fs = require('fs')
const { readdirSync } = require('fs')
const path = require('path')

module.exports = {
	isEmptyDir: function (dirnane) {
		try {
			const dirents = readdirSync(dirnane, {
				withFileTypes: true,
			})
			if (dirents.length > 0) {
				return true
			}
			return false
		} catch (err) {
			return false
		}
	},
}
