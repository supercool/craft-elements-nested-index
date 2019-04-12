# Changelog
All Notable changes to `flipboxdigital\craft-elements-nested-index` will be documented in this file

## 2.2.1 - 2019-04-12
### Added
- Association response errors will be displayed on screen via flash message.

## 2.2.0 - 2019-03-26
### Added
- sortOptions can be passed through to the element index

### Fixed
- error when a limit was set and counting elements

### Removed
- copied table/thumb index view which were only used to set properties not available in previous versions of Craft.

## 2.1.0 - 2019-01-12
### Added
- `NestedIndexElementActionTrigger` js class to asset bundle allowing for nexted index actions

## 2.0.0 - 2019-01-02
### Changed
- Updated Ember dependency to version 2 

## 1.0.1 - 2018-06-13
### Fixed
- Aligning index sort options with changes made in Craft 3.0.11

## 1.0.0 - 2018-04-24
- Production release

## 1.0.0-rc.3 - 2018-04-17
### Added
- Ability to override load more element action

## 1.0.0-rc.2 - 2018-04-04
### Added
- `sources` param can be explicitly passed to the index template and used in favor of the defaults
- `customizableSources` param can be explicitly passed to the index template and used in favor of the defaults

## 1.0.0-rc.1 - 2018-03-28
### Removed
- sourceElementId from NestedElementIndex settings

## 1.0.0-rc
- Initial release!
