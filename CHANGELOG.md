# Changelog
All Notable changes to `flipboxdigital\craft-elements-nested-index` will be documented in this file

## 2.4.1 - 2020-08-19
### Fixed
- Error thrown when editing entry for Craft 3.5.x.  [Ref](https://github.com/craftcms/cms/commit/8678b515a539cef7d20e7464fdb0b62fe8179d52#diff-184ce609400df0ea3b938a89b899ba1dL4)


## 2.4.0 - 2020-07-14
### Changed
- Added support for Craft 3.4 style changes and set as min.

## 2.3.1 - 2019-06-05
### Fixed
- View settings were not getting passed correctly

### Added
- Index template can be extended via twig as it now contains blocks

## 2.3.0 - 2019-06-03
### Added
- Index select setting to send disabled element ids as a comma delimited string instead of an array.

## 2.2.2 - 2019-04-30
### Changed
- Site menu is hidden by default

### Added
- Option to hide source menu explicitly

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
