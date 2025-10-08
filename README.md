# kswitch

### Get KSwitch:
- `cd ~/Documents/`
- `git clone https://github.com/chloroken/kswitch`

### Get SWHKD (optional):
- `git clone https://github.com/waycrate/swhkd;cd swhkd`
- `make setup`
- `make clean`
- `make`
- `sudo make install`
- `sudo chown root:root swhkd` <--- Set permissions
- `sudo chmod u+s swhkd`
- `swhks &` <--- Start daemon
- `swhkd`
- `vim ~/.config/swhkd/swhkdrc` <-- Edit your shortcuts
- `chmod +x ./autostart.sh`
- Add Kswitch's `autostart.sh` to autostarting scripts
