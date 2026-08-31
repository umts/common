# common

This is a janky repository that I (@benmelz) am using to manage files that _should_ be consistent across our different applications (starting with tool configs and expanding out further as I go).

I'm organizing sets of files into "trees" (`trees/`) for each "type" of application.

The synchronization script (`bin/sync {tree}`) will read a list of local repos from `config/{tree}` and rsync them all, assuming they live in the same directory as this repo.
