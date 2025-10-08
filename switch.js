var windows = workspace.windowList();

for (var i = 0; i < windows.length; ++i) {
  var w = windows[i];
  if (w.resourceClass == "steam_app_8500") {
    if (w.captionNormal != "$WINDOWNAME") {
      w.minimized = true;
      w.fullScreen = false;
    } else {
      w.minimized = false;
      w.fullScreen = true;
    }
  }
}