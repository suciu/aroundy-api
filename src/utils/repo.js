function add_sort (query, sort_by) {
  let order = 'id ASC'
  if (sort_by) {
    if (sort_by[0] === '-' && sort_by.length > 1) {
      let field = sort_by.replace(sort_by[0], '')
      order = field + ' DESC'
    } else {
      order = sort_by + ' ASC'
    }
  }
  Object.assign(query, {
    order: order
  })
  return query
}
module.exports.sort = add_sort

function add_limit (query, page, limit) {
  if (page) {
    Object.assign(query, {
      offset: (page - 1) * limit,
      limit: limit
    })
  }
  return query
}
module.exports.limit = add_limit

module.exports.query = function (search_fields) {
  return function (limit, page, q) {
    let queryObject = {}
    let conditions = {}
    if (q.search) {
      let fields = search_fields.map(field => {
        return {
          [field]: {
            $like: '%' + q.search + '%'
          }
        }
      })
      Object.assign(conditions, {
        $or: fields
      })
    }
    queryObject = add_sort(queryObject, q.sort)
    queryObject = add_limit(queryObject, page, limit)

    Object.assign(queryObject, {
      where: conditions
    })
    return queryObject
  }
}
