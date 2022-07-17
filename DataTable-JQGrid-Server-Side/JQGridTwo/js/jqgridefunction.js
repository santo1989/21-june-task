var mygrid = jQuery('#list'),
  cmTxtTemplate = {
    width: 40,
    align: 'center',
    sortable: false,
    hidden: true,
  },
  currentTemplate = cmTxtTemplate,
  i,
  cm = [],
  maxCol = 30,
  dummyColumnNamePrefix = '', //"Col. ",
  clearShrinkToFit = function () {
    // save the original value of shrinkToFit
    var orgShrinkToFit = mygrid.jqGrid('getGridParam', 'shrinkToFit')
    // set shrinkToFit:false to prevent shrinking
    // the grid columns after its showing or hiding
    mygrid.jqGrid('setGridParam', { shrinkToFit: false })
    return orgShrinkToFit
  },
  setGridWidthAndRestoreShrinkToFit = function (orgShrinkToFit, width) {
    // restore the original value of shrinkToFit
    mygrid.jqGrid('setGridParam', { shrinkToFit: orgShrinkToFit })
    mygrid.jqGrid('setGridWidth', width)
  },
  dummyTestRegex = new RegExp(dummyColumnNamePrefix + '(\\d)+'),
  counter = 1

// Add dummy hidden columns. All the columns has the same template
for (i = 0; i < maxCol; i++) {
  cm.push({ name: dummyColumnNamePrefix + (i + 1), template: currentTemplate })
}

mygrid.jqGrid({
  url: 'file1.json',
  datatype: 'json',
  // colNames will be set based on the properties for JSON input
  colModel: cm,
  height: 'auto',
  rownumbers: true,
  loadonce: true,
  gridview: true,
  rowNum: 1000,
  sortname: '',
  jsonReader: {
    cell: '',
    id: function (obj) {
      return 'id' + counter++
    },
    page: function (obj) {
      var rows = obj.rows,
        colModel = mygrid[0].p.colModel,
        cmi,
        width = 0,
        iFirstDummy,
        cols,
        orgShrinkToFit,
        showColNames = [],
        hideColNames = []

      if (typeof rows === 'undefined' || !(rows.length > 0)) {
        // something wrong need return
        return obj.page
      }

      // find the index of the first dummy column
      // in the colModel. If we use rownumbers:true,
      // multiselect:true or subGrid:true additional
      // columns will be inserted at the begining
      // of the colModel
      iFirstDummy = -1
      for (i = 0; i < colModel.length; i++) {
        cmi = colModel[i]
        if (dummyTestRegex.test(cmi.name)) {
          iFirstDummy = i
          break
        }
      }
      if (iFirstDummy === -1) {
        // something wrong need return
        return obj.page
      }

      orgShrinkToFit = clearShrinkToFit()

      // we get the first row of the JSON data
      cols = rows[0].length

      // fill the list of unused columns
      for (i = 0; i < colModel.length; i++) {
        cmi = colModel[i]
        if (i < iFirstDummy + cols) {
          cmi.width = currentTemplate.width
          showColNames.push(cmi.name)
        } else {
          hideColNames.push(cmi.name)
        }
      }
      mygrid.jqGrid('showCol', showColNames)
      mygrid.jqGrid('hideCol', hideColNames)
      setGridWidthAndRestoreShrinkToFit(
        orgShrinkToFit,
        cols * currentTemplate.width
      )

      return obj.page
    },
  },
})
$('#readJson1').click(function () {
  mygrid
    .jqGrid('setGridParam', { datatype: 'json', page: 1, url: 'file1.json' })
    .trigger('reloadGrid')
})
$('#readJson2').click(function () {
  mygrid
    .jqGrid('setGridParam', { datatype: 'json', page: 1, url: 'file2.json' })
    .trigger('reloadGrid')
})
