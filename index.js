'use strict';
const runApplescript = require('run-applescript');
const os = require('os');

function getMenuBarId() {
  const release = os.release().split(".");
  const osSierraVersion = 16;
  if (release.length > 0 && parseInt(release[0]) >= osSierraVersion) {
    return 1;
  } else {
    return 2;
  }
}

module.exports.on = function () {
  if (os.platform() !== 'darwin') {
    throw new Error('do-not-disturb only supports the darwin platform');
  }
  const menuBarId = getMenuBarId();

  return runApplescript(`
    tell application "System Events"
      tell application process "SystemUIServer"
        try
					if not (exists menu bar item "Notification Center, Do Not Disturb enabled" of menu bar ${menuBarId} of application process "SystemUIServer" of application "System Events") then
            key down option
            click menu bar item "Notification Center" of menu bar ${menuBarId}
            key up option
          end if
        on error
          key up option
        end try
      end tell
    end tell`);
};

module.exports.off = function () {
  if (os.platform() !== 'darwin') {
    throw new Error('do-not-disturb only supports the darwin platform');
  }
  const menuBarId = getMenuBarId();

  return runApplescript(`
    tell application "System Events"
      tell application process "SystemUIServer"
        try
          if exists menu bar item "Notification Center, Do Not Disturb enabled" of menu bar ${menuBarId} of application process "SystemUIServer" of application "System Events" then
            key down option
            click menu bar item "Notification Center, Do Not Disturb enabled" of menu bar ${menuBarId}
            key up option
          end if
        on error
          key up option
        end try
      end tell
    end tell`);
};
