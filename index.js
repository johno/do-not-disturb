'use strict';
const runApplescript = require('run-applescript');

module.exports.on = function () {
  if (process.platform !== 'darwin') {
    throw new Error('do-not-disturb only supports the darwin platform');
  }

  return runApplescript(`
    tell application "System Events"
      tell application process "SystemUIServer"
        try
					if not (exists menu bar item "Notification Center, Do Not Disturb enabled" of menu bar 2 of application process "SystemUIServer" of application "System Events") then
            key down option
            click menu bar item "Notification Center" of menu bar 2
            key up option
          end if
        on error
          key up option
        end try
      end tell
    end tell`);
};

module.exports.off = function () {
  if (process.platform !== 'darwin') {
    throw new Error('do-not-disturb only supports the darwin platform');
  }

  return runApplescript(`
    tell application "System Events"
      tell application process "SystemUIServer"
        try
          if exists menu bar item "Notification Center, Do Not Disturb enabled" of menu bar 2 of application process "SystemUIServer" of application "System Events" then
            key down option
            click menu bar item "Notification Center, Do Not Disturb enabled" of menu bar 2
            key up option
          end if
        on error
          key up option
        end try
      end tell
    end tell`);
};
