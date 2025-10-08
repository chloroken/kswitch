# kswitch

### Get KSwitch:
- `cd ~/git/`
- `git clone https://github.com/chloroken/kswitch`

### Get SWHKD (optional):
- `cd ~/Documents/`
- `git clone https://github.com/waycrate/swhkd;cd swhkd`
- `make setup`
- `make clean`
- `make`
- `sudo make install`
- `sudo chown root:root swhkd`
- `sudo chmod u+s swhkd`
- `swhks &`
- `swhkd`
- `vim ~/.config/swhkd/swhkdrc` <-- Edit shortcuts
- `chmod +x ./autostart.sh`
- Add Kswitch's `autostart.sh` to KDE Plasma's autostarting scripts

### Example SWHKD config file:
```
F1
    bash ~/git/kswitch/switch "EVE - orthoptera"
F2
    bash ~/git/kswitch/switch "EVE - huehueahuea"
F3
    bash ~/git/kswitch/switch "EVE - arilus cristatus"
F4
    bash ~/git/kswitch/switch "EVE - RSS Scanner Probe"
F5
    bash ~/git/kswitch/switch "EVE - Satorigu"
```
