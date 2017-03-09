var express = require('express');
var router = express.Router();
var exec = require('child_process').exec;

router.get('/send-notify', function(req, res, next) {
   var success = parseInt(req.query.success),
       text = success ? 'OK' : 'Observer build ERROR',
       title = success ? 'Build notify' : 'Build ERROR',
       script = 'display notification "' + text + '" with title "' + title + '"' + (success ? '' : ' sound name "Purr"');

   exec("osascript -e '" + script + "'", function(error, stdout, stderr){
      //
   });
  res.send('ok');
});


module.exports = router;
